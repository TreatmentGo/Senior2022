package model

/*
type Division struct {
	Code int    `json:"code"`
	Name string `json:"name"`
}
*/

type FrontEnd struct {
	Name1         string  `json:"name1"`
	Name2         string  `json:"name2"`
	Street1       string  `json:"street1"`
	Street2       string  `json:"street2"`
	City          string  `json:"city"`
	State         string  `json:"state"`
	Zip           int     `json:"zip"`
	Zip4          int     `json:"zip4"`
	County        string  `json:"county"`
	Phone         string  `json:"phone"`
	Intake_prompt string  `json:"intake_prompt"`
	Intake1       string  `json:"intake1"`
	Intake2       string  `json:"Intake2"`
	Website       string  `json:"website"`
	Latitude      float64 `json:"latitude"`
	Longitude     float64 `json:"longitude"`
	Type_facility string  `json:"type_facility"`
}

type Facilities struct {
	Id      int64  `json:"id"`
	Intake1 string `json:"intake1"`
	Intake2 string `json:"intake2"`
	Name1   string `json:"name1"`
	Phone   string `json:"phone"`
	Website string `json:"website"`
}

type Location struct {
	City    string `json:"city"`
	State   string `json:"state"`
	Street1 string `json:"street1"`
	Street2 string `json:"street2"`
	Zip     int32  `json:"zip"`
}
