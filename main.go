package main

import (
	"BCG-Web/utils"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"os"
)

var tmp *template.Template

func init() {
	tmp = template.Must(template.ParseGlob("templates/*gohtml"))
}

func main() {

	http.HandleFunc("/", Inicio)
	http.HandleFunc("/inicio", Inicio)
	http.HandleFunc("/nosotros", Nosotros)
	http.HandleFunc("/contacto", Contacto)
	http.HandleFunc("/productos", Productos)
	http.Handle("/css/", http.StripPrefix("/css", http.FileServer(http.Dir("css/"))))
	http.Handle("/js/", http.StripPrefix("/js", http.FileServer(http.Dir("js/"))))
	http.Handle("/svg/", http.StripPrefix("/svg", http.FileServer(http.Dir("svg/"))))
	http.Handle("/img/", http.StripPrefix("/img", http.FileServer(http.Dir("img/"))))
	http.Handle("/socialMedia/", http.StripPrefix("/socialMedia/", http.FileServer(http.Dir("img/socialMedia/"))))
	http.Handle("/recursos/", http.StripPrefix("/recursos/", http.FileServer(http.Dir("img/recursos/"))))

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
	//http.ListenAndServe(":8080",nil)
	//nf, _ := os.Create("blabla.html")
	//tmp.ExecuteTemplate(nf, "contacto.gohtml", nil)
}
func Inicio(w http.ResponseWriter, r *http.Request) {
	err := tmp.ExecuteTemplate(w, "index.gohtml", nil)
	if err != nil {
		log.Fatal(err)
	}
}
func Nosotros(w http.ResponseWriter, r *http.Request) {
	err := tmp.ExecuteTemplate(w, "nosotros.gohtml", nil)
	if err != nil {
		log.Fatal(err)
	}
}
func Productos(w http.ResponseWriter, r *http.Request) {
	err := tmp.ExecuteTemplate(w, "productos.gohtml", nil)
	if err != nil {
		log.Fatal(err)
	}
}
func Contacto(w http.ResponseWriter, r *http.Request) {
	dataSend := ""
	if r.Method == http.MethodPost {
		n := r.FormValue("name")
		a := r.FormValue("apellido")
		e := r.FormValue("email")
		cod := r.FormValue("countrycod")
		p := r.FormValue("phone")
		m := r.FormValue("textArea")

		body := fmt.Sprintf("Nombre. %s %s\r\nEmail. %s\r\nTeléfono. (%s) %s\n%s", n, a, e, cod, p, m)
		var data = map[string]string{
			"body":body,
			"email": e,
		}
		dataSend = utils.SendMail(data)
	}

	err := tmp.ExecuteTemplate(w, "contacto.gohtml", dataSend)
	dataSend = ""
	fmt.Println(dataSend)
	if err != nil {
		log.Fatal(err)
	}
}
