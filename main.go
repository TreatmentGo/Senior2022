package main

import (
	"api/controller"
	"context"
	"log"

	"github.com/aws/aws-lambda-go/lambda"
)

type MyEvent struct {
	State string `json:"state"`
	Zip   string `json:"zip"`
}

func HandleRequest(ctx context.Context, event MyEvent) ([]string, error) {

	stateID := event.State
	var code []string
	code = controller.GetFacil(stateID)
	log.Printf(event.State)
	log.Println(event.Zip)
	return code, nil
}

func main() {
	lambda.Start(HandleRequest)

}
