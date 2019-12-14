import express, { Request, Response } from 'express';
import User from '../models/user.model';

var userList:User[] = [];

export const getUser = (req: Request, res: Response) => {
  res.send(JSON.stringify(userList));
};

export const addUser = (req: Request, res: Response) => {
  const { firstName, lastName, email, password, role } = req.body;
  const user: User = {
    id: Date.now(),
    firstName,
    lastName,
    email,
    password,
    role,
  }
  userList.push(user);
  res.send(userList);
}

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.body;
  userList = userList.filter(user => user.id != id);
  res.send(userList);
}

export const updateUser = (req: Request, res: Response) => {
  const { id, firstName, lastName, email, password, role } = req.body;
  userList.forEach(user => {
    if (id != user.id) return user;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.role = role;
    return user;
  })

  res.send(userList)
}

export const sortUserList = (req: Request, res: Response) => {
  const sortParam:String  = req.body.sortParam;
  if (sortParam == 'firstName') {
    userList.sort((a:User, b:User) => a.firstName > b.firstName ? 1 : 0);
  }
  if (sortParam == 'lastName') {
    userList.sort((a:User, b:User) => a.lastName > b.lastName ? 1 : 0);
  }
  if (sortParam == 'role') {
    userList.sort((a:User, b:User) => a.role > b.role ? 1 : 0);
  }
  if (sortParam == 'id') {
    userList.sort((a:User, b:User) => a.id > b.id ? 1 : 0);
  }
  res.send(userList);
}

export const addTestUser = (req: Request, res: Response) => {
  userList = [
    {
      id: Date.now(),
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      password: 'iamjohn',
      role: 'Kunde',
    },
    {
      id: Date.now(),
      firstName: 'Will',
      lastName: 'Smith',
      email: 'willsmith@gmail.com',
      password: 'iamwill',
      role: 'Admin',
    }
  ]

  res.send(userList);
}