import {useForm} from 'react-hook-form'


function App() {
  const{
    register,
    formState: {
      errors
    },
    handleSubmit
  } = useForm();

    const onSubmit = (data) => {}
      alert(JSON.stringify(data))
  return (
    <div className='App'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('')}
        />

        <input type='submit'/>
      </form>
    </div>
  );
}

export default App;
