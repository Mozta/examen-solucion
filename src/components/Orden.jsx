// Muestra la orden en curso: mesa, platillos, total, errores y el botón de
// confirmar. Ver docs/08-contrato-ui.md y el wireframe de docs/07-wireframes.md.
// Toma Menu.jsx como modelo.
//
// Props: decide tú cuáles necesita y escríbelas aquí.
//        (Pista: la orden, el total, los mensajes de error y una función por acción.)
export default function Orden({ orden, onQuitar, total, onMesa, errores, onConfirmar }) {
  return (
    <section aria-label="Orden">
      <h2>Orden</h2>
      {/* TODO HU-02 · HU-03 · HU-04 */}
      <label>
        Mesa <input type="number" value={orden.mesa ?? ''} 
        onChange={(e) => onMesa(e.target.value)}
        />
      </label>
      <ul>
        {orden.items.map((item) => (
          <li key={item.id} aria-label={item.nombre}>
            <div>
              <strong>{item.nombre} x <span data-testid="cantidad">{item.cantidad}</span> </strong>
            </div>
            <button onClick={() => onQuitar(item.id)}>Quitar</button>
          </li>
        ))}
      </ul>
      <p>
        Total: <span data-testid>${total.toFixed(2)}</span>
      </p>

      {errores.map((texto) => (
        <p key={texto} role="alert">{texto}</p>
      ))}

      <button onClick={onConfirmar} >Confirmar orden</button>
    </section>
  )
}
