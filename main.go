package main

import (
	"Log"
	"fmt"
	"go_react_todo/router"
	"net/http"
)

func main() {
	r := router.Router()
	fmt.Println("Starting the server on PORT 8000.....")

	log.Fatal(http.ListenAndServe(":8000", r))
}
