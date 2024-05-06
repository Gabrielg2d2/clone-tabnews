function status(request, response) {
    response.status(200).json({ status: 'Aqui está o endpoint de status!' })
}

export default status
