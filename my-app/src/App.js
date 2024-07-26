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
        <label >        
          Login
          <input
            {...register("login", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 3,
                message: "Минимум 3 символа"
              },
              maxLength: {
                value: 7,
                message: "Максимум 7 символов"
              }

            })}
          />
        </label>

        <label >        
          Password
          <input
            {...register("password", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 6,
                message: "Минимум 6 символа"
              },
              maxLength: {
                value: 9,
                message: "Максимум 9 символов"
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
