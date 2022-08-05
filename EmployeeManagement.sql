create database  EmployeeManagement;
use EmployeeManagement;

create table department(
deptno int primary key,
dname text,
location text
);

desc department;

create table employee(
empno int primary key,
ename text,
job text,
hiredate date,
managerID int,
salary int,
commission int,
deptno int,
foreign key (deptno) references department(deptno)
);

select * from employee;
insert into department values(2,"support","Mumbai");
insert into employee values(10001,"Rahul","Engineer","2022-02-01",101,30000,10000,2);
desc employee;