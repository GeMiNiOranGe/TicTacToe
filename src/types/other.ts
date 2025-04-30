export type ReducerAction<Type, Payload> = {
  type: Type;
  payload: Payload;
};

export type ReducerActionWithoutPayload<Type> = {
  type: Type;
};
