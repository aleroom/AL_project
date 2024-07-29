import {useForm} from 'react-hook-form'


function App() {
  const{
    register,
    formState: {errors, isValid},
    handleSubmit, 
    reset,
  } = useForm({
    mode: "onBlur"
  })


    const onSubmit = (data) => {
      alert(JSON.stringify(data))
      reset();
    }
      
  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <label  >        
          Login
          <input
            {...register("login", {
              required: "This field is required",
              minLength: {
                value: 3,
                message: "Minimum 3 symbols"
              },
              maxLength: {
                value: 7,
                message: "Up to 7 symbols"
              }

            })}
          />
        </label>

        <label>        
          Password
           <input
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Minimum 4 symbols"
              },
              maxLength: {
                value: 9,
                message: "Up to 6 symbols"
              }

            })}
          />
        </label>
         <div>
          {errors?.login && <p>{errors?.login?.message || "!Error"}</p>} 
          {errors?.password && <p>{errors?.password?.message || "!Error"}</p>} 
         </div>
        
          <input type='submit' name="submit" disabled={!isValid}/>
          


      </form>
    </div>
  );
}

export default App;
