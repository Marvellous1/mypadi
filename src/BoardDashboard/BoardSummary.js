import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
import DeleteBoard from './DeleteBoard';
import EditBoard from './EditBoard';

const BoardSummary = ({ board, index }) => {   
    return ( 
        <tbody>
        <tr>
          <td>{index + 1}</td>
          <td><Link to = {`/board/${board.id}`} >{board.name}</Link></td>
          <td><Link to ={`/board/${board.id}`} >{board.description}</Link></td>
          <td>{moment(board.createdAt.toDate().toString()).calendar()}</td>
          <td><EditBoard board={board}/></td>
          <td><DeleteBoard board={board}/></td>
        </tr>
      </tbody>

    );
};

export default BoardSummary
