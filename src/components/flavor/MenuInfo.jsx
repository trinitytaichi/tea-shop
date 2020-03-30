import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectByTea } from 'actions/flavor'

function MenuInfo({ flavors, targetTeaFlavors, selectByTea }) {
  const isOnly = targetTeaFlavors.length === 1 ? true : false
  const renderList = () => {
    return (
      <ul>
        {targetTeaFlavors.map(el => (
          <li
            key={el.id}
            className="link-btn mb-3"
            onClick={() => selectByTea(el.id)}
          >
            <i class="fas fa-leaf mr-2"></i>
            {el.name}
          </li>
        ))}
      </ul>
    )
  }
  const renderInfo = () => {
    const target = targetTeaFlavors[0]
    flavors.forEach(el =>
      el.outerflavors.forEach(el => {
        if (el.id === target.frontId) {
          target.front = el.name
        } else if (el.id === target.midId) {
          target.mid = el.name
        } else if (el.id === target.endId) {
          target.end = el.name
        }
      })
    )
    return (
      <div className="ml-5">
        <ul className="pl-0 mb-4">
          <li className="mb-2">前香：{target.front}</li>
          <li className="mb-2">中韻：{target.mid}</li>
          <li className="mb-2">後味：{target.end}</li>
        </ul>
        <p>{target.intro}</p>
      </div>
    )
  }

  return <div>{isOnly ? renderInfo() : renderList()}</div>
}

const mapStateToProps = ({ flavor }) => {
  return { ...flavor }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectByTea }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuInfo)