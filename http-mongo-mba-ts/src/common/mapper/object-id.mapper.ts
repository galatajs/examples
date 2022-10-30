export interface SingleMapper<I, O> {
  map(input: I): O;
}

export interface MultipleMapper<I, O> {
  mapArr(input: I[]): O[];
}

export interface Mapper<I, O>
  extends SingleMapper<I, O>,
    MultipleMapper<I, O> {}
