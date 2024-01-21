import React from 'react';
import dummyLb from "../dummy-data/dummyLeaderboardData.json";
import "../styles/leaderboard.css"

const Leaderboard = () => {
  return (
    <div className='leaderboard'>
      {
        dummyLb ?
          <>
            <table>
              <tr className='lb-header'>
                <th> Rank </th>
                <th> Username </th>
                <th> Score </th>
              </tr>
              {
                dummyLb.map((singlePerson) =>
                  <>
                    <tr>
                      <td> {singlePerson.rank} </td>
                      <td> {singlePerson.username} </td>
                      <td> {singlePerson.score} </td>
                    </tr>
                  </>
                )
              }
              <tr className='current-users-score'>
                <td> 0 </td>
                <td> Name </td>
                <td> NULL </td>
              </tr>
            </table>
          </> : "Loading"
      }
    </div >
  )
}

export default Leaderboard;