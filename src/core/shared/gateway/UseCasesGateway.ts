export default interface UseCaseGateway<IN, OUT> {
  execute(data: IN): Promise<OUT>;
}
