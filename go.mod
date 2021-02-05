module github.com/cdle/o2m

go 1.13

replace github.com/astaxie/beego v1.12.1 => github.com/cdle/beego v1.12.6 // indirect

require (
	github.com/astaxie/beego v1.12.3
	github.com/cdle/steady v1.0.20
	github.com/go-playground/locales v0.13.0
	github.com/go-playground/universal-translator v0.17.0
	github.com/gofrs/uuid v4.0.0+incompatible
	github.com/leodido/go-urn v1.2.0 // indirect
	golang.org/x/crypto v0.0.0-20191205180655-e7c4368fe9dd // indirect
	golang.org/x/sys v0.0.0-20210124154548-22da62e12c0c // indirect
	golang.org/x/text v0.3.5 // indirect
	google.golang.org/protobuf v1.25.0 // indirect
	gopkg.in/go-playground/assert.v1 v1.2.1 // indirect
	gopkg.in/go-playground/validator.v9 v9.31.0
	gopkg.in/yaml.v2 v2.4.0 // indirect
	gorm.io/driver/sqlite v1.1.4
	gorm.io/gorm v1.20.12
)
