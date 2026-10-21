// Muestra la orden en curso: mesa, platillos, total, errores y el botón de
// confirmar. Ver docs/08-contrato-ui.md y el wireframe de docs/07-wireframes.md.
// Toma Menu.jsx como modelo.
//
// Props: decide tú cuáles necesita y escríbelas aquí.
//        (Pista: la orden, el total, los mensajes de error y una función por acción.)
export default function Orden({ orden, onQuitar }) {
  return (
    <section aria-label="Orden">
      <h2>Orden</h2>
      {/* TODO HU-02 · HU-03 · HU-04 */}
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
    </section>
  )
}
