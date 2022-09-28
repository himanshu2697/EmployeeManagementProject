import React, { useState } from 'react';
const tagList = ['Java', 'Python', 'C#/.Net', 'Mean', 'Ruby', 'Coding languages', 'Database knowledge', 'Data structures and algorithms', 'Source control', 'Procedures', 'Debugging knowledge', 'Operating systems', 'Text editing software', 'Cryptography', 'Software frameworks', 'Cloud platforms', 'Spreadsheet software', 'Angular', 'Vue.Js', 'React', 'jQuery', 'Django', 'Ruby on Rails', 'Laravel'];

const Skills = ({ tabIndex, singleUserData, setSkills }) => {
    const [arr, setArr] = useState([]);
    const [skill, setSkill] = useState('');

    const manageTags = (index) => {
        if (!arr.includes(tagList[index])) {
            setArr(s => { return [...s, tagList[index]]; });
            setSkills(s => { return [...s, tagList[index]]; });
        }
    }

    const clickedTag = (tag) => {
        if (arr.includes(tag)) {
            return 'tag-item active-skill';
        } else {
            return 'tag-item';
        }
    }

    const addSkill = () => {
        if (!arr.includes(skill)) {
            setArr(s => { return [...s, skill]; });
            setSkill('');
            setSkills(s => { return [...s, skill]; });
        }
    }

    const removeTag = (index) => {
        setArr(arr.filter((item, i) => index !== i));
        setSkills(arr.filter((item, i) => index !== i));
    }

    return (
        <div className={(tabIndex == 5) ? 'skills d-block' : 'd-none'}>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='row'>
                        <div className='col-md-10'>
                            <input type="text" className="form-control" placeholder="Enter skill" value={skill} onChange={(e) => setSkill(e.target.value)} />
                        </div>
                        <div className='col-md-2'>
                            <button title={'Add Skill'} className="btn add-tags" onClick={() => addSkill()}>
                                <i className="material-icons add-tags-icon">add</i>
                            </button>
                        </div>
                    </div>
                    &nbsp;
                    <div className='select-tags'>
                        {
                            tagList.map(
                                (tag, index) =>
                                    <div className={clickedTag(tag)} key={index} onClick={() => manageTags(index)}>{tag}</div>
                            )
                        }
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='selected-tags'>
                        <div className='selected-title'>{'Selected Skills'}</div>
                        {
                            arr.map((item, i) => {
                                return (
                                    <div className='tag-list' key={i}>
                                        {item} &nbsp;
                                        <button title={'Remove'} className='btn tag-remove' onClick={() => removeTag(i)}><i className="material-icons tag-icon-close">close</i></button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
