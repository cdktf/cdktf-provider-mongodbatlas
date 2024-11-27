# `dataMongodbatlasX509AuthenticationDatabaseUser` Submodule <a name="`dataMongodbatlasX509AuthenticationDatabaseUser` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasX509AuthenticationDatabaseUser <a name="DataMongodbatlasX509AuthenticationDatabaseUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user mongodbatlas_x509_authentication_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_x509_authentication_database_user

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  id: str = None,
  username: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetUsername">reset_username</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.resetUsername"></a>

```python
def reset_username() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasX509AuthenticationDatabaseUser resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_x509_authentication_database_user

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_x509_authentication_database_user

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_x509_authentication_database_user

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_x509_authentication_database_user

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasX509AuthenticationDatabaseUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasX509AuthenticationDatabaseUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasX509AuthenticationDatabaseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasX509AuthenticationDatabaseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList">DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.customerX509Cas">customer_x509_cas</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.certificates"></a>

```python
certificates: DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList">DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList</a>

---

##### `customer_x509_cas`<sup>Required</sup> <a name="customer_x509_cas" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.customerX509Cas"></a>

```python
customer_x509_cas: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasX509AuthenticationDatabaseUserCertificates <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificates" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_x509_authentication_database_user

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates()
```


### DataMongodbatlasX509AuthenticationDatabaseUserConfig <a name="DataMongodbatlasX509AuthenticationDatabaseUserConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_x509_authentication_database_user

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  id: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#project_id DataMongodbatlasX509AuthenticationDatabaseUser#project_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#id DataMongodbatlasX509AuthenticationDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.22.0/docs/data-sources/x509_authentication_database_user#username DataMongodbatlasX509AuthenticationDatabaseUser#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_x509_authentication_database_user

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference <a name="DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_x509_authentication_database_user

dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.id">id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates">DataMongodbatlasX509AuthenticationDatabaseUserCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.id"></a>

```python
id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasX509AuthenticationDatabaseUserCertificates
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasX509AuthenticationDatabaseUser.DataMongodbatlasX509AuthenticationDatabaseUserCertificates">DataMongodbatlasX509AuthenticationDatabaseUserCertificates</a>

---



