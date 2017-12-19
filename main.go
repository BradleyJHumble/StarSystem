package main
import (
    "encoding/json"
    "log"
    "net/http"
    "github.com/gorilla/mux"
)
func main() {
    router := mux.NewRouter()
    router.HandleFunc("/{id}/{starRating}", StarSystem).Methods("POST")
    log.Fatal(http.ListenAndServe(":8000", router))
}
func StarSystem (w http.ResponseWriter, r *http.Request) {}

