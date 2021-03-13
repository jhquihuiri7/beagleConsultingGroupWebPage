package main

import (
	"html/template"
	"log"
	"net/http"
	"os"
)

var tmp *template.Template

func init()  {
	tmp = template.Must(template.ParseGlob("templates/*gohtml"))
}

func main()  {

	http.HandleFunc("/",Inicio)
	http.HandleFunc("/inicio",Inicio)
	http.HandleFunc("/nosotros",Nosotros)
	http.Handle("/css/", http.StripPrefix("/css", http.FileServer(http.Dir("css/"))))
	http.Handle("/js/", http.StripPrefix("/js", http.FileServer(http.Dir("js/"))))
	http.Handle("/svg/", http.StripPrefix("/svg", http.FileServer(http.Dir("svg/"))))
	http.Handle("/img/", http.StripPrefix("/img", http.FileServer(http.Dir("img/"))))
	http.Handle("/socialMedia/", http.StripPrefix("/socialMedia/", http.FileServer(http.Dir("img/socialMedia/"))))
	http.Handle("/recursos/", http.StripPrefix("/recursos/", http.FileServer(http.Dir("img/recursos/"))))
	http.ListenAndServe(":8050",nil)
	nf, _ := os.Create("blabla.html")
	tmp.ExecuteTemplate(nf, "nosotros.gohtml",nil)
}
func Inicio (w http.ResponseWriter, r *http.Request)  {
	err := tmp.ExecuteTemplate(w,"index.gohtml",nil)
	if err != nil {
	log.Fatal(err)
	}
}
func Nosotros (w http.ResponseWriter, r *http.Request)  {
	err := tmp.ExecuteTemplate(w,"nosotros.gohtml",nil)
	if err != nil {
		log.Fatal(err)
	}
}
