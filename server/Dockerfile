FROM golang:alpine

RUN apk update && apk add --no-cache git

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

ENV GIN_MODE=release
ENV CGO_ENABLED=0
ENV GOOS=linux

RUN go build -a -o bin/app ./cmd/app

EXPOSE 8080

ENTRYPOINT ["./bin/app"]