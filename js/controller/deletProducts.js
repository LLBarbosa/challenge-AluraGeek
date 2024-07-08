function deleteProduct(productId, event) {      
    if (!confirm("Tem certeza que deseja excluir o produto??")) {
        return; // Se o usuário cancelar, a função para aqui.
    }

    fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            let productToRemove = document.getElementById(productId);
            productToRemove.remove();
        } else {
            console.error("Erro ao excluir produto!", response.status, response.statusText);
        }
    })
    .catch(error => console.error("Error:", error));
}

export { deleteProduct };
