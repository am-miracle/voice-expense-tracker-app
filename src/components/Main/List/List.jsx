import React, {useContext} from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@mui/icons-material'

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';

const List = () => {

    const { list, avatarIncome, avatarExpense } = useStyles();
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);

  return (
      <MUIList denser={false} className={list}>
        {transactions.map((transaction)=>(
            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income'? avatarIncome : avatarExpense}>
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
