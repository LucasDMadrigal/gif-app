import React from 'react'

const GifForm = ({ inputValue, onChange, onSubmit }) => {
    return (
        <form
        onSubmit={onSubmit}
        >
      <input
        className="form-control"
        type="text"
        placeholder="Ingrese una categoría"
        value={inputValue}
        onChange={onChange}
      />
    </form>

    )
}

export default GifForm
