import { useState } from 'react'
import './App.css'

function App() {
  const [formdata, setformData] = useState({firstName:"", lastName:"",email:"", country:"", street:"", State:""
       ,city:"", pincode:"", comments:true, candidates : true, offers:true,})

  console.log(formdata);
  function changeHandlar(event){
    const {name,value,checked,type} = event.target
    setformData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type ==="checkbox" ? checked : value
      }
    })
  }

  return (
    <div className='App'>
      <form>

         <p>First Name</p>
        <input 
          type='text'
          placeholder='Enter First name'
          onChange={changeHandlar}
          name='firstName'
          value={setformData.firstName}
        />
    

        <p>Last Name</p>
        <input 
          type='text'
          placeholder='Enter Last name'
          onChange={changeHandlar}
          name='lastName'
          value={setformData.lastName}
        />


        <p>Email adress</p>
        <input 
          type='email'
          placeholder='Enter email'
          onChange={changeHandlar}
          name='email'
          value={setformData.email}
        />
        
        <p>country</p>
        <select 
          name = 'country'
          id='country'
          value={setformData.country}
          onChange={changeHandlar}
        >

          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
          <option value="Austreliya">Austreliya</option>
          <option value="England">England</option>

        </select>

        <p>Street address</p>
        <input 
          type='text'
          placeholder='Enter street address'
          onChange={changeHandlar}
          name='street'
          value={setformData.street}
        />
        
        <p>State/province</p>
        <select
         name='state'
         id='state'
         value={setformData.state}
         onChange={changeHandlar}
         >

          <option value="Rajasthan">Rajasthan</option>
          <option value="Rajasthan">Rajasthan</option>

        </select>

        <p>City</p>
        <select
        name='city'
        id='city'
        value={setformData.city}
        onChange={changeHandlar}
        >

          <option value="jaipur">Jaipur</option>
          <option value="Dausa">Dausa</option>
          <option value="Alwar">Alwar</option>
          <option value="Bikaner">Bikaner</option>
          <option value="Jaisalmer">Jaisalmer</option>
          <option value="Kota">Kota</option>
          <option value="Jodhapur">Jodhapur</option>
          <option value="Udhapur">Udhapur</option>

        </select>

        <p>ZIP/Pin code</p>
        <input 
          type='number'
          placeholder='Enter pincode'
          onChange={changeHandlar}
          name='pincode'
          value={setformData.pincode}
        />
        
        <p>By Email</p>
        <input 
          type='checkbox'
          onChange={changeHandlar}
          name='comments'
          value={setformData.comments}
          id='comments'
          checked = {setformData.comments}
        />
        <label htmlFor='comments'>Comments
          <p>get notified when someone posts</p>
        </label>


        <input 
          type='checkbox'
          onChange={changeHandlar}
          name='condidates'
          value={setformData.condidates}
          id='condidates'
          checked = {setformData.condidates}
        />
        <label htmlFor='condidates'>Candidate 
          <p>get notified when a candidate applies for a job</p>
        </label>

        <input 
          type='checkbox'
          onChange={changeHandlar}
          name='offers'
          value={setformData.offers}
          id='offers'
          checked = {setformData.offers}
        />
        <label htmlFor='offers'>Offers 
          <p>get notified when a condydate accepts or rejects an offers</p>
        </label>
        

        <h4>Push Notifications</h4>
        <p>these are delivered via SMS to your mobile phone</p>

        <input 
            type='radio'
            id='pushEverything'
            name='PushNotifacation'
            value="Everything"
            onChange={changeHandlar}
          />

          <label value="pushEverything">Everything</label>
          <br/>

          <input 
            type='radio'
            id='pushEmail'
            name='PushNotifacation'
             value="same as Email"
            onChange={changeHandlar}
          />

          <label value="pushEverything">same as Email</label>
          <br/>

          <input 
            type='radio'
            id='pushNothing'
            value="No push nothing"
            onChange={changeHandlar}
          />

          <label value="pushNothing">No push nothing</label>

      </form>
    </div>
      
  )
}

export default App
