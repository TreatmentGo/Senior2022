package controller

import (
	"api/model"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"os"

	_ "github.com/lib/pq"
)

var host = os.Getenv("AWS_HOST")
var port = os.Getenv("AWS_PORT")
var user = os.Getenv("AWS_USER")
var password = os.Getenv("AWS_PASSWORD")
var dbname = os.Getenv("AWS_DB")

// TODO: update the function to use a database
func GetFacil(stateID string) []string {
	psqlconn := fmt.Sprintf("host=%s port=%s user= %s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	var s []string
	a := string(stateID)
	output := ""
	stmnt := "SELECT name1, name2, street1, street2, city, state_, zip, zip4, county, phone, intake_prompt, intake1, intake2, website,latitude, longitude, type_facility FROM facility WHERE facility.state_ = $1 LIMIT 10;"

	db, err := sql.Open("postgres", psqlconn)
	if err != nil {
		log.Print("Failed to open a DB connection: ", err)
	}
	defer db.Close()
	results, err := db.Query(stmnt, a)
	if err != nil {
		log.Fatalf(err.Error(), "results issue")
	}

	for results.Next() {
		var data model.FrontEnd
		err = results.Scan(&data.Name1, &data.Name2, &data.Street1, &data.Street2, &data.City,
			&data.State, &data.Zip, &data.Zip4, &data.County, &data.Phone, &data.Intake_prompt, &data.Intake1, &data.Intake2, &data.Website, &data.Latitude, &data.Longitude, &data.Type_facility)
		if err != nil {
			log.Fatal(err.Error(), "parse issue")
		}
		d_json, _ := json.Marshal(data)
		output = string(d_json)
		s = append(s, output)
		log.Println("State queried", stateID)

	}
	return (s)
}
