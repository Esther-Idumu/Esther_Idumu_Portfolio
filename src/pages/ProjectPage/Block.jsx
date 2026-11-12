    // One block of a project section. It shows whichever of these the data has,
    // in this order: heading, paragraphs, list, steps, definitions, table.
    export default function Block({ block }) {
    const { heading, paragraphs, list, steps, definitions, table } = block;

    return (
        <div className="block">
        {heading && <h3 className="block__heading">{heading}</h3>}

        {paragraphs && (
            <div className="block__paragraphs">
            {paragraphs.map((text) => (
                <p key={text}>{text}</p>
            ))}
            </div>
        )}

        {list && (
            <ul className="block__list">
            {list.map((item) => (
                <li key={item}>{item}</li>
            ))}
            </ul>
        )}

        {steps && (
            <ol className="steps">
            {steps.map((step, index) => (
                <li key={step.title} className="step">
                <span className="step__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                    <h4 className="step__title">{step.title}</h4>
                    <p className="step__text">{step.text}</p>
                </div>
                </li>
            ))}
            </ol>
        )}

        {definitions && (
            <dl className="defs">
            {definitions.map((item) => (
                <div key={item.term} className="defs__row">
                <dt>{item.term}</dt>
                <dd>{item.text}</dd>
                </div>
            ))}
            </dl>
        )}

        {table && (
            <div className="table-wrap">
            <table className="table">
                <thead>
                <tr>
                    {table.columns.map((column) => (
                    <th key={column}>{column}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {table.rows.map((row) => (
                    <tr key={row[0]}>
                    {row.map((cell) => (
                        <td key={cell}>{cell}</td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}
        </div>
    );
    }