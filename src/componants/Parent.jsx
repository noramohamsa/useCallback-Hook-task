import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function Parent() {
    const [age,setAge]= useState(20)
    const [salary,setSalary]= useState(8000)


   const handelAge= useCallback(()=>{
      setAge(age+1);
    },[age])

   const handelSalary= useCallback(()=>{
      setSalary(salary+1000);
    },[salary])
   
   
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handelClick={handelAge}>Increment Age</Button>
      <Count  text="Salary"  count={salary}/>
      <Button handelClick={handelSalary}>Increment Salary</Button>
    </div>
  )
}

export default Parent
