get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do
  content_type :json # need to tell ruby what data type this shit is

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)

  {cell: cell, color: color}.to_json #makme sure to .to_json, since youre ajax call is going to interprete this and it needs jto know what data type it s
end
