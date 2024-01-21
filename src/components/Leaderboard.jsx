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
              <tr>
                <th> Rank </th>
                <th> Username </th>
                <th> Score </th>
              </tr>
              {
                dummyLb.map((singlePerson) =>
                  <>
                    <tr>
                      <td className='lb-rank'>
                        {singlePerson.rank}
                      </td>
                      <td className='lb-username'>
                        {singlePerson.username}
                      </td>
                      <td className='lb-score'>
                        {singlePerson.score}
                      </td>
                    </tr>
                  </>
                )
              }
            </table>
          </> : "Loading"
      }
    </div >
  )
}

export default Leaderboard;