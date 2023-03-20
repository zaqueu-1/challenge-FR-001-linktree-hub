import React from 'react'

function MyLink({link, title, icon}) {
  return (
    <div className='card-container'>
      <a target='_blank' href={link}>
        <div className='card'>
            {icon}
            <span className='link-desc'>{title}</span>
        </div>
      </a>
    </div>
  )
}

export default MyLink
