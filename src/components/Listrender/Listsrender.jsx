import React from 'react'

function Listsrender() {
  const users = [{
    name: 'sanket patil',
    occupation : 'React developer',
    company : 'Bosch',
    skills : 'ReactJS',
    id : 1
  }]

  return (
    <div>
        <ul>
            {users.map(user =>(
                <li key={user.id}>{user.name}{user.occupation}
                {user.company} {user.skills}</li>
            ))}
        </ul>
    </div>
  )
}

export default Listsrender