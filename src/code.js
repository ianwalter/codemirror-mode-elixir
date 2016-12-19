export const code = `# Some code examples borrowed from https://learnxinyminutes.com/docs/elixir/

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

export const htmlScript = `<!-- You can simply add elixir.js as a script tag: -->
<script src="js/codemirror.js"></script>
<script src="js/codemirror-mode-elixir/dist/elixir.js"></script>`

export const jsImport = `// If you're using frontend build tools like Webpack and Babel,
// you can simply import the module and register the mode:
import CodeMirror from 'codemirror'
import 'codemirror-mode-elixir'`

export const create = `CodeMirror.fromTextArea(document.getElementById('code'), { mode: 'elixir' })`
