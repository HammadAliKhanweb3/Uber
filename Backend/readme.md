
# Backend  API Documentation

## User Registration API

### Endpoint: `/users/register-user`

### Description

This endpoint allows you to register a new user by providing their full name, email, and password. The endpoint validates the input data and creates a new user in the database if the data is valid.

### Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname`: An object containing the user's first name and last name.
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the user's email address. It must be a valid email format.
- `password`: A string with a minimum length of 6 characters.

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```
#### Example Response
{
  "status": 200,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "60c72b2f9b1e8b001c8e4d3b",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "createdAt": "2021-06-14T12:34:56.789Z",
      "updatedAt": "2021-06-14T12:34:56.789Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
#### Error Response
{
  "status": 400,
  "message": "Invalid Mail, Full name must be greater than 3 characters, Password must be greater than 6 characters"
}