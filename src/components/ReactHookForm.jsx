import { useForm } from 'react-hook-form';

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true, maxLength: 4 })} />
      <select {...register('gender')}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="number" {...register('age', { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}
