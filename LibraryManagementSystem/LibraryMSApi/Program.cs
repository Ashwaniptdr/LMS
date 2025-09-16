using LibraryMSApi.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(
<<<<<<< HEAD
        "server=DESKTOP-D2IRBPT;database=LibraryDB;TrustServerCertificate=true ;trusted_Connestion=True"));
=======
        "server=ASHVIN\\MSSQLSERVER01;database=LibraryDB;TrustServerCertificate=true ;trusted_Connestion=True"));
>>>>>>> 0e824af48b6bb1f4ab2bc2965e76dbe5cf0f2799

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
