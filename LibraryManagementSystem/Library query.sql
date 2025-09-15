Create Database LibraryDB;

  use LibraryDB;
  Go
       _____Book Table______


     create Table Books(
	     BookId int identity(1,1) primary key,
		 [Name] nvarchar (250) not null,
		 Author nvarchar (250) not null,
		 Publisher nvarchar (250) not null ,
		 Edition nvarchar (250)  ,
		 category nvarchar (250) ,
		 price Decimal (10,2)  not null,
		 BookImage nvarchar (500)

	 );

	 _______Empoloyees Table ________

	 Create table Employees (
	     EmployeeId int identity(1,1)  not null ,
		 [Name] nvarchar (250) not null,
		 Phone nvarchar (12) not null,
		 Email nvarchar (250) primary key not null,
		 [Password] nvarchar (250) not null,
	 );


	 ___________USers Table _________________

	 Create table [Users](
	     UserId int identity(1,1) Unique,
		 [Name] nvarchar (250) not null,
		 Phone nvarchar (12) not null,
		 Email nvarchar (250) primary key not null,
		 [Password] nvarchar (250) not null,
		 MemberType nvarchar (250) check (MemberType IN ('standard','Premium'))
	 );
	   
	   _____________BookCheckOut table________________

      CREATE TABLE BookCheckOut(
          CheckOutId INT IDENTITY(1,1) PRIMARY KEY,
          UserId INT NOT NULL,
          BookId INT NOT NULL,
          CheckoutDate DATETIME NOT NULL DEFAULT GETDATE(),
          DueDate DATETIME NOT NULL,
          ReturnDate DATETIME NULL,
          RenewCount INT DEFAULT 0,
         FOREIGN KEY (UserId) REFERENCES Users(UserId),
         FOREIGN KEY (BookId) REFERENCES Books(BookId)
     );