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
    <div class="mx-auto max-w-xl text-center">
      <div > 
        <h2 class="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">Registration form</h2>
      </div>
      
      <form class="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit(onSubmit)} >
      
        <label class="block text-lg font-semibold leading-6 text-gray-900"  >        
          Login
          
          <input class="mx-auto block w-1/2  rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

        <label class="block text-lg font-semibold leading-6 text-gray-900">        
          Password
           <input class="mx-auto block w-1/2  rounded-md border-2 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-8"
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
        
          <input type='submit' name="submit" class="mx-auto block w-1/2 rounded-md bg-gray-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " disabled={!isValid}/>
          


      </form>
    </div>
  );
}

export default App;
