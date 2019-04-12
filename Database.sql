use master 
go
drop database S354_Project
go
create database S354_Project
go
use S354_Project
go

create table Country
(ID int Identity(1,1) Primary key,
name varchar(100) 

)
go

create table Provinces
(ID int Identity(1,1) Primary key,
name varchar(100),
country int,
FOREIGN KEY (country) REFERENCES Country(ID)
)
go
create table ZipCode
(ID int Identity(1,1) Primary key,
name varchar(100),
Province int,
FOREIGN KEY (Province) REFERENCES Provinces(ID)
)
go
create table City
(ID int Identity(1,1) Primary key,
name varchar(100),
Zipcode int,
FOREIGN KEY (Zipcode) REFERENCES Zipcode(ID)
)
go
create table Client 
(ID int Identity(1,1) Primary Key,
Name varchar(200),
Surname varchar(200),
email_address varchar(200),
Phone_number varchar(200),
street_address varchar(100),
city int,
FOREIGN KEY (City) REFERENCES City(ID)
)
go

create table Colloborators
(ID int IDENTITY(1,1) PRIMARY KEY,
Name varchar(200),
Surname varchar(200),
email_address varchar (200),
Phone_number varchar (200)
)
go

create table User_roles
(ID int IDENTITY(1,1) PRIMARY KEY,
Role_Description varchar(200),
Role_DateAdded DATETIME

)
go
create table Colab_Roles
(ID int Identity Primary key,
Colab_ID int,
Roles_ID int,
FOREIGN KEY (Colab_ID) REFERENCES Colloborators(ID),
FOREIGN KEY (Roles_ID) REFERENCES User_Roles(ID)
)
go



create table Articles
(ID int IDENTITY(1,1) PRIMARY KEY,
Art_Comment varchar(200),
Art_DateAdded DATETIME,
WHO_add int,
FOREIGN KEY (WHO_add) REFERENCES Colloborators(ID)
)
go

create table Symptoms
(ID int IDENTITY(1,1) PRIMARY KEY,
Sym_Description varchar(200),
Sym_Content varchar(8000),
Sym_DateAdded DATETIME,
WHO_added int,
FOREIGN KEY (WHO_added) REFERENCES Colloborators(ID),
)
go

create table Treatment
(ID int IDENTITY(1,1) PRIMARY KEY,
_description varchar(200),
WHO_added int
FOREIGN KEY (WHO_added) REFERENCES Colloborators(ID),
)
go
create table FAQ
(ID int IDENTITY(1,1) PRIMARY KEY,
Question VARCHAR(200),
relevantanswer int,
Colab_ID int,
FOREIGN KEY (Colab_ID) REFERENCES Colloborators(ID),
)
go
create table FA_Line
(ID int IDENTITY(1,1) PRIMARY KEY,
FAQ_ID INT,
FA_Answer varchar(200),
LIKES int,
FOREIGN KEY (FAQ_ID) REFERENCES FAQ(ID)
)
go

create table KumonClinic 
(ID int Identity(1,1) Primary Key,
Name varchar(200),
street_address varchar(100),
city int,
FOREIGN KEY (City) REFERENCES City(ID)
)
go

create table Reminder 
(ID int Identity(1,1) Primary Key,
Name varchar(200),
Description varchar(200),
Datecreated DateTime,
DateDue DateTime,
Client int,
FOREIGN KEY (Client) REFERENCES Client(ID)
)
go
create table ReminderList 
(ID int Identity(1,1) Primary Key,
Name varchar(200),
Description varchar(200),
Datecreated DateTime,
DateDue DateTime,
reminderID int,
FOREIGN KEY (reminderID) REFERENCES Reminder(ID)
)
go
