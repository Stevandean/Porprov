const getResponse = (req, res, data, code = 200) => res.status(code).send({
  status: true,
  message: "successful",
  data,
});

const addResponse = (req, res, data, code = 201) => res.status(code).send({
  status: true,
  message: "successful",
  data,
});

const editResponse = (req, res, data, code = 200) => res.status(code).send({
  status: true,
  message: data + " data has been updated",
  data,
});

const deleteResponse = (req, res, data, code = 200) => res.status(code).send({
  status: true,
  message: data + " data has been deleted",
  data,
});

const errorResponse = (
  req,
  res,
  message = 'Something went wrong',
  code = 500,
) => res.status(code).json({
  status: false,
  message,
  data: null,
});
module.exports = {
    getResponse,
    addResponse,
    editResponse,
    deleteResponse,
    errorResponse
  };