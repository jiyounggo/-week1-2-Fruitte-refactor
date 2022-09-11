const baseUrl = process.env.REACT_APP_SERVER_URL;

const get = async () => {
  const res = await fetch(baseUrl);
  if (!res.ok) {
    throw new Error(`${res.status.toString()} Error 인한 요청 실패!`);
  }
  const result = await res.json();

  return result;
};

export { get };
