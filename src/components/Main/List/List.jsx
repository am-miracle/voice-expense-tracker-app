import React from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@mui/icons-material'


import useStyles from './styles';

const List = () => {

    const { list, avatarIncome, avatarExpense } = useStyles();

    const transactions =[
        {
            id:1,
            type: 'Income',
            category: 'Salary',
            amount: 50,
            date: new Date(),
        }
    ];

  return (
      <MUIList denser={false} className={list}>
        {transactions.map((transaction)=>(
            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'income'? avatarIncome : avatarExpense}>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge='end'aria-label='delete' onClick=''>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
      </MUIList>
  );
};

export default List;
