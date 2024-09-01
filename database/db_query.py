import sqlite3

conn = sqlite3.connect('./gwambleDB.db')
cursor = conn.cursor()

# Execute and print results for each SELECT statement
tables = ['users', 'session', 'session_info', 'session_bets']

for table in tables:
    cursor.execute(f'SELECT * FROM {table}')
    rows = cursor.fetchall()
    print(f"Results from {table}:")
    for row in rows:
        print(row)
    print()  # Add a blank line for better readability

conn.close()