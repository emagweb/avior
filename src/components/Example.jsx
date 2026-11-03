import { Code } from './Code'

const Example = ({ code, file = 'Example.jsx', children }) => (
  <div className='m-b-24'>
    <div className='bc-line bw-1 r-12 p-y-32 p-x-24 m-b-8'>{children}</div>
    <Code code={code} label={file} icon='file' />
  </div>
)

const Variables = ({ rows }) => (
  <div className='bc-line bw-1 r-12 m-b-24'>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>What it sets</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([name, value, text]) => (
          <tr key={name}>
            <td><code>{name}</code></td>
            <td><code>{value}</code></td>
            <td>{text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

const Table = ({ head, rows }) => (
  <div className='bc-line bw-1 r-12 m-b-24'>
    <table>
      <thead>
        <tr>{head.map((cell) => <th key={cell}>{cell}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell, index) => (
              <td key={index}>{index === 0 ? <code>{cell}</code> : cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export { Example, Variables, Table }
