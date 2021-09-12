package utils

import (
	"fmt"
	"net/smtp"
)

func SendMail(data map[string]string) string {
	// sender data
	from := "jhonatan.quihuiri@gmail.com" //ex: "John.Doe@gmail.com"
	password := "Meta085216841"           // ex: "ieiemcjdkejspqz"
	// receiver address
	toEmail := "jhonatan.quihuiri@gmail.com" // ex: "Jane.Smith@yahoo.com"
	to := []string{toEmail}
	// smtp - Simple Mail Transfer Protocol
	host := "smtp.gmail.com"
	port := "587"
	address := host + ":" + port
	// message
	subject := "Subject: Our Golang Email\n"
	message := []byte(subject + data["body"])
	// athentication data
	// func PlainAuth(identity, username, password, host string) Auth
	auth := smtp.PlainAuth("", from, password, host)
	// send mail
	// func SendMail(addr string, a Auth, from string, to []string, msg []byte) error
	err := smtp.SendMail(address, auth, from, to, message)
	if err != nil {
		fmt.Println("err:", err)
		return "no"
	}
	AutomaticResponse(data["email"])
	return "ok"
}
func AutomaticResponse(toEmail string)  {
	// sender data
	from := "jhonatan.quihuiri@gmail.com" //ex: "John.Doe@gmail.com"
	password := "Meta085216841"           // ex: "ieiemcjdkejspqz"
	// receiver address
	to := []string{toEmail}
	// smtp - Simple Mail Transfer Protocol
	host := "smtp.gmail.com"
	port := "587"
	address := host + ":" + port
	// message
	subject := "Subject: Our Golang Email\n"
	bod := "Hemos recibido su mensaje, nos prondremos en contacto pronto"
	message := []byte(subject + bod)
	// athentication data
	// func PlainAuth(identity, username, password, host string) Auth
	auth := smtp.PlainAuth("", from, password, host)
	// send mail
	// func SendMail(addr string, a Auth, from string, to []string, msg []byte) error
	err := smtp.SendMail(address, auth, from, to, message)
	if err != nil {
		fmt.Println("err:", err)
		return
	}
}