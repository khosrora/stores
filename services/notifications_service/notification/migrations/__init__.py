from django.db.migrations.executor import MigrationExecutor
from django.db.backends.base.base import BaseDatabaseWrapper

def __getattr__(name):
    if name == "Migration":
        return None
    raise AttributeError(f"module {__name__} has no attribute {name}")

def apply_migrations(*args, **kwargs):
    pass

MigrationExecutor.apply_migrations = apply_migrations
BaseDatabaseWrapper.ensure_connection = lambda self: None