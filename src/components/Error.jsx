import { useNavigate } from 'react-router'

export function Error() {
  const navigate = useNavigate()
  return (
    <section class="error">
      <h2>An Error Occurred</h2>
      <button onClick={() => navigate(0)}>RETRY</button>
    </section>
  )
}
