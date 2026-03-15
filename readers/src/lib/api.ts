export async function api(url: string, options: RequestInit = {}) {
  console.log(options);
  const res = await fetch(url, {
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await res.json();
  if (res.status >= 400) {
    console.log(data, res);
  }

  return data;
}
