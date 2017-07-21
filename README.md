#Afternoon Assignment

##Base Mode
 - [x] Add two new fields to the Person Schema
  - `date of birth` - a date field
  - `internetPts` - a number field to track this person's Internet Points
 - [x] Update the entry form to include Date of Birth info
 - [x] Each person starts w/ a default value of 1,000 Internet Points
 - [x] Add both pieces of info to the DOM

##Hard Mode
 - [x] Add a button to each person's listing on the DOM that increases their IP by 100
 - [x] Update listing in the collection & on the page

 ##Pro Mode
 - [ ] Add a search bar to search by `name` using `Mongoose` methods



# Antares Mongoose Intro (completed lecture repo)
An overview for today's Mongoose lecture.

We are starting with an application that will run and serve our
index page with `npm start`. Some of the client-side markup is completed.

We will complete this application using Angular and Mongoose.

## Agenda

1. Connect to Mongo using [Mongoose](http://mongoosejs.com/), a node module.
2. Define a Mongoose Schema for our Documents.
3. Create base GET, POST, PUT, and DELETE server-side routes.
4. Implement the Mongoose syntax needed to support the above routes.
5. Use Angular to add, display, update and delete people.
6. Explore a pre-save hook provided by Mongoose.

## New Terms

* Mongoose schema
* Mongoose model
* Mongoose subdocument
* Hook

## New Syntax

Quick rundown of new syntax we will use to query our database using Mongoose.

### Mongoose Model Functions

* `find`
* `findById`
* `findByIdAndUpdate`
* `findByIdAndRemove`

### Mongoose Document Functions

* `save`

### Mongoose Schema Functions

* `pre`
