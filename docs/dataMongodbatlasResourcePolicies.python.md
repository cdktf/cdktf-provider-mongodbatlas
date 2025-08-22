# `dataMongodbatlasResourcePolicies` Submodule <a name="`dataMongodbatlasResourcePolicies` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasResourcePolicies <a name="DataMongodbatlasResourcePolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/resource_policies mongodbatlas_resource_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.Initializer.parameter.orgId"></a>

- *Type:* str

Unique 24-hexadecimal digit string that identifies the organization that contains your projects.

Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/resource_policies#org_id DataMongodbatlasResourcePolicies#org_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasResourcePolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasResourcePolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasResourcePolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasResourcePolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/resource_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasResourcePolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.resourcePolicies">resource_policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.results">results</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList">DataMongodbatlasResourcePoliciesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `resource_policies`<sup>Required</sup> <a name="resource_policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.resourcePolicies"></a>

```python
resource_policies: DataMongodbatlasResourcePoliciesResourcePoliciesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesList</a>

---

##### `results`<sup>Required</sup> <a name="results" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.results"></a>

```python
results: DataMongodbatlasResourcePoliciesResultsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList">DataMongodbatlasResourcePoliciesResultsList</a>

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasResourcePoliciesConfig <a name="DataMongodbatlasResourcePoliciesConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  org_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.orgId">org_id</a></code> | <code>str</code> | Unique 24-hexadecimal digit string that identifies the organization that contains your projects. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

Unique 24-hexadecimal digit string that identifies the organization that contains your projects.

Use the [/orgs](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.40.0/docs/data-sources/resource_policies#org_id DataMongodbatlasResourcePolicies#org_id}

---

### DataMongodbatlasResourcePoliciesResourcePolicies <a name="DataMongodbatlasResourcePoliciesResourcePolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies()
```


### DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser <a name="DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser()
```


### DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser <a name="DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser()
```


### DataMongodbatlasResourcePoliciesResourcePoliciesPolicies <a name="DataMongodbatlasResourcePoliciesResourcePoliciesPolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies()
```


### DataMongodbatlasResourcePoliciesResults <a name="DataMongodbatlasResourcePoliciesResults" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults()
```


### DataMongodbatlasResourcePoliciesResultsCreatedByUser <a name="DataMongodbatlasResourcePoliciesResultsCreatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser()
```


### DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser <a name="DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser()
```


### DataMongodbatlasResourcePoliciesResultsPolicies <a name="DataMongodbatlasResourcePoliciesResultsPolicies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResourcePoliciesList <a name="DataMongodbatlasResourcePoliciesResourcePoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdByUser">created_by_user</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedByUser">last_updated_by_user</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies">DataMongodbatlasResourcePoliciesResourcePolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_by_user`<sup>Required</sup> <a name="created_by_user" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdByUser"></a>

```python
created_by_user: DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesCreatedByUserOutputReference</a>

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_by_user`<sup>Required</sup> <a name="last_updated_by_user" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedByUser"></a>

```python
last_updated_by_user: DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResourcePoliciesLastUpdatedByUserOutputReference</a>

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.policies"></a>

```python
policies: DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList">DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasResourcePoliciesResourcePolicies
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePolicies">DataMongodbatlasResourcePoliciesResourcePolicies</a>

---


### DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList <a name="DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference <a name="DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies">DataMongodbatlasResourcePoliciesResourcePoliciesPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasResourcePoliciesResourcePoliciesPolicies
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResourcePoliciesPolicies">DataMongodbatlasResourcePoliciesResourcePoliciesPolicies</a>

---


### DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser">DataMongodbatlasResourcePoliciesResultsCreatedByUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasResourcePoliciesResultsCreatedByUser
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUser">DataMongodbatlasResourcePoliciesResultsCreatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference <a name="DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUser</a>

---


### DataMongodbatlasResourcePoliciesResultsList <a name="DataMongodbatlasResourcePoliciesResultsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasResourcePoliciesResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasResourcePoliciesResultsOutputReference <a name="DataMongodbatlasResourcePoliciesResultsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdByUser">created_by_user</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedByUser">last_updated_by_user</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedDate">last_updated_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList">DataMongodbatlasResourcePoliciesResultsPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults">DataMongodbatlasResourcePoliciesResults</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_by_user`<sup>Required</sup> <a name="created_by_user" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdByUser"></a>

```python
created_by_user: DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsCreatedByUserOutputReference</a>

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_by_user`<sup>Required</sup> <a name="last_updated_by_user" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedByUser"></a>

```python
last_updated_by_user: DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference">DataMongodbatlasResourcePoliciesResultsLastUpdatedByUserOutputReference</a>

---

##### `last_updated_date`<sup>Required</sup> <a name="last_updated_date" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.lastUpdatedDate"></a>

```python
last_updated_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.policies"></a>

```python
policies: DataMongodbatlasResourcePoliciesResultsPoliciesList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList">DataMongodbatlasResourcePoliciesResultsPoliciesList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasResourcePoliciesResults
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResults">DataMongodbatlasResourcePoliciesResults</a>

---


### DataMongodbatlasResourcePoliciesResultsPoliciesList <a name="DataMongodbatlasResourcePoliciesResultsPoliciesList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference <a name="DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_resource_policies

dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.body">body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies">DataMongodbatlasResourcePoliciesResultsPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.body"></a>

```python
body: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasResourcePoliciesResultsPolicies
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasResourcePolicies.DataMongodbatlasResourcePoliciesResultsPolicies">DataMongodbatlasResourcePoliciesResultsPolicies</a>

---



