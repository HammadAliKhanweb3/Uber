
# Backend  API Documentation

## Endpoint: `/users/register-user`

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
```json
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
```
#### Error Response
```json
{
  "status": 400,
  "message": "Invalid Mail, Full name must be greater than 3 characters, Password must be greater than 6 characters"
}

```


### 2. Login User
**Endpoint:** `POST /users/login`

**Description:** Authenticates a user and returns an access token.

#### Request Body
The request body should be in JSON format and include the following fields:
- `email`: A string representing the user's email address. It must be a valid email format.
- `password`: A string representing the user's password. It must be at least 6 characters long.

#### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Success Response
## Status: 200 OK

```json
{
  "status": 200,
  "message": "User logged in successfully",
  "data": {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "createdAt": "2021-06-14T12:34:56.789Z",
      "updatedAt": "2021-06-14T12:34:56.789Z"
    },
    "token": "jwt_access_token"
  }
}
```
#### Error Responses
#### validatoin Error
#### Stats:400 BAd Resquest
```json
{
  "status": 400,
  "message": "Invalid Mail, Password must be greater than 5 characters"
}
```

### 3. Get User Profile
**Endpoint:** `GET /users/profile`

**Description:** Retrieves the profile information of the authenticated user.

#### Request Headers
The request must include the following headers or jwt in cookies:
- `Authorization`: A string containing the Bearer token for authentication.

#### Example Request
```http
GET /users/profile HTTP/1.1
Host: example.com
Authorization: Bearer jwt_access_token
```

## Success Response
## Status: 200 OK

```json
{
  "status": 200,
  "message": "User profile retrieved successfully",
  "data": {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "createdAt": "2021-06-14T12:34:56.789Z",
      "updatedAt": "2021-06-14T12:34:56.789Z"
    }
  }
}
```

#### Error Responses
#### Unauthorized Error
#### Status: 401 Unauthorized
```json
{
  "status": 401,
  "message": "Unauthorized access, invalid or missing token"
}
```

### 4. Logout User
**Endpoint:** `POST /users/logout`

**Description:** Logs out the current user by invalidating their session token. It ensures that the user is no longer authenticated and cannot access protected resources until they log in again.

#### Request Headers
The request must include the following headers or jwt in cookies:
- `Authorization`: A string containing the Bearer token for authentication.

#### Example Request
```http
POST /users/logout HTTP/1.1
Host: example.com
Authorization: Bearer jwt_access_token
```

## Success Response
## Status: 200 OK

```json
{
  "status": 200,
  "message": "Successfully logged out"
}
```

#### Error Responses
#### Unauthorized Error
#### Status: 401 Unauthorized
```json
{
  "status": 401,
  "message": "Unauthorized. The user is not authenticated."
}
```

#### Internal Server Error
#### Status: 500 Internal Server Error
```json
{
  "status": 500,
  "message": "Internal server error. An error occurred while processing the request."
}
```

### 5. Register Captain
**Endpoint:** `POST /captains/register`

**Description:** Registers a new captain by providing their full name, email, password, and vehicle details. The endpoint validates the input data and creates a new captain in the database if the data is valid.

#### Request Body
The request body should be in JSON format and include the following fields:
- `fullname`: An object containing the captain's first name and last name.
  - `firstname`: A string with a minimum length of 3 characters.
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the captain's email address. It must be a valid email format.
- `password`: A string with a minimum length of 6 characters.
- `vehicle`: An object containing the vehicle details.
  - `color`: A string with a minimum length of 3 characters.
  - `plate`: A string with a minimum length of 3 characters.
  - `capacity`: An integer with a minimum value of 1.
  - `vehicleType`: A string that must be one of the following: `car`, `motorcycle`, `auto`.

#### Example Request Body
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Success Response
## Status: 200 OK
```json
{
  "status": 200,
  "message": "Captain registered successfully",
  "data": {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "createdAt": "2021-06-14T12:34:56.789Z",
      "updatedAt": "2021-06-14T12:34:56.789Z"
    },
    "token": "jwt_access_token"
  }
}
```

#### Error Responses
#### Validation Error
#### Status: 400 Bad Request
```json
{
  "status": 400,
  "message": "Invalid input data"
}
```

#### Internal Server Error
#### Status: 500 Internal Server Error
```json
{
  "status": 500,
  "message": "Internal server error. An error occurred while processing the request."
}
```

### 6. Login Captain
**Endpoint:** `POST /captains/login`

**Description:** Authenticates a captain and returns an access token.

#### Request Body
The request body should be in JSON format and include the following fields:
- `email`: A string representing the captain's email address. It must be a valid email format.
- `password`: A string representing the captain's password. It must be at least 6 characters long.

#### Example Request
```json
{
  "email": "captain@example.com",
  "password": "password123"
}
```

## Success Response
## Status: 200 OK

```json
{
  "status": 200,
  "message": "Captain logged in successfully",
  "data": {
    "token": "jwt_access_token"
  }
}
```

#### Error Responses
#### Validation Error
#### Status: 400 Bad Request
```json
{
  "status": 400,
  "message": "Invalid email or password"
}
```

#### Internal Server Error
#### Status: 500 Internal Server Error
```json
{
  "status": 500,
  "message": "Internal server error. An error occurred while processing the request."
}
```

### Captains Profile Endpoint

#### Endpoint
`GET /captains/profile`

#### Description
This endpoint retrieves the profile information of a captain.

#### Parameters
- `captain_id` (query parameter, required): The unique identifier of the captain whose profile is being requested.

## Success Response
## Status: 200 OK
```json
{
  "status": 200,
  "message": "Captain registered successfully",
  "data": {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "createdAt": "2021-06-14T12:34:56.789Z",
      "updatedAt": "2021-06-14T12:34:56.789Z"
    },
    "token": "jwt_access_token"
  }
}
```

## Error Response 
## Authorizat Error
```json
{
  "status": 400,
  "message": "Unauthorized User",}
```


### 7. Logout Captain
**Endpoint:** `POST /captains/logout`

**Description:** Logs out the currently authenticated captain by invalidating their session or token.

#### Request Headers
The request must include the following headers or JWT in cookies:
- `Authorization`: A string containing the Bearer token for authentication .

#### Example Request
```http
POST /captains/logout HTTP/1.1
Host: example.com
Authorization: Bearer jwt_access_token
```

### Success Response
**Status: 200 OK**

```json
{
  "status": 200,
  "message": "Logout successful"
}
```

### Error Responses
**Unauthorized Error**
**Status: 401 Unauthorized**
```json
{
  "status": 401,
  "message": "Unauthorized. The user is not authenticated."
}
```

**Internal Server Error**
**Status: 500 Internal Server Error**
```json
{
  "status": 500,
  "message": "Internal server error. An error occurred while processing the request."
}
```
