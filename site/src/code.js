export default `# Some code examples borrowed from https://learnxinyminutes.com/docs/elixir/

# Module
defmodule MyModule do
  @moduledoc """
  This is a built-in attribute on a example module.
  """

  # Struct
  defstruct name: nil, age: 0, height: 0

  # Function
  def function_one do
    {:ok, "one"}
  end

  # Pattern matching
  def function_two do
    {:ok, msg} = function_one
    IO.puts msg
  end

  # Try/Rescue block
  def function_three do
    try do
      raise "some error"
    rescue
      RuntimeError -> "rescued a runtime error"
      _error -> "this will rescue any error"
    end
  end

  # Pipes
  def function_four(start, finish) do
    Range.new(start, finish)
    |> Enum.map(fn x -> x * x end)
    |> Enum.filter(fn x -> rem(x, 2) == 0 end)
  end
end
`
